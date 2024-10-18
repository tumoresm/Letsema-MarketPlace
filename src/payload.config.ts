import dotenv from 'dotenv'
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"
import path from "path"

dotenv.config({
    path: path.resolve(__dirname, '../.env.local'),
  })

import { buildConfig } from "payload/config"


export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [],
    routes: {
        admin: '/post'
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: '- Letsema MarketPlace',
            favicon: '/favicon.ico',
            ogImage: '/thumbnail.jpg',
          },        
    },    
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGODB_URI!,
    }),
    rateLimit: {max: 1500},
    typescript: {
        outputFile: path.resolve(__dirname,'payload-types.ts')
    },
   
})
