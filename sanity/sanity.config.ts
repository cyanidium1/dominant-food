import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import './styles.css'
// import {theme} from 'https://themer.sanity.build/api/hues?preset=dew'
// const {createTheme, hues} = await import('https://themer.sanity.build/api/hues?preset=dew')
const SANITY_STUDIO_PROJECT_ID = process.env.SANITY_STUDIO_PROJECT_ID as string

export default defineConfig({
  // theme: createTheme({...hues, primary: {...hues.primary, mid: '#dae501'}}),
  name: 'default',
  title: 'cactus',

  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
