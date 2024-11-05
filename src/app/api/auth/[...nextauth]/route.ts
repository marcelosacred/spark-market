import NextAuth, { DefaultUser, DefaultSession, NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

interface ExtendedUser extends DefaultUser {
  token?: string;
  address?: string;
  name?: string;
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string
    user: {
      id?: string;
      email?: string;
      address?: string;
      name?: string;
    }
  }
  
  interface User {
    address?: string;
    name?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    address?: string
    name?: string
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<ExtendedUser | null> {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Необходимо ввести имя пользователя и пароль')
        }

        try {
          const authRes = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          })

          const authData = await authRes.json()

          if (!authRes.ok) {
            throw new Error('Неверное имя пользователя или пароль')
          }

          const userRes = await fetch('https://fakestoreapi.com/users/1')
          const userData = await userRes.json()
          
          return {
            id: userData.id.toString(),
            email: userData.email,
            name: `${userData.name.firstname} ${userData.name.lastname}`,
            address: userData.address,
            token: authData.token
          }
        } catch (error) {
          throw new Error('Ошибка авторизации')
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.address = user.address
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string
        session.user.address = token.address as string
      }
      return session
    }
  },
  session: {
    strategy: "jwt",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }