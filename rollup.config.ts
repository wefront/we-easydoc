// @ts-ignore
import pkg from './package.json'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import json from '@rollup/plugin-json'
import styles from 'rollup-plugin-styles'
import image from '@rollup/plugin-image'
import vuePlugin from 'rollup-plugin-vue2';
import replace from 'rollup-plugin-replace'

export default {
  input: './src/index.ts',
  plugins: [
    vuePlugin(),
    replace({
      // @ts-ignore
      'process.env.NODE_ENV': JSON.stringify('development'),
      // @ts-ignore
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    styles({
      mode: ['extract', 'index.css'],
    }),
    image(),
    typescript(),
    commonjs(),
    resolve(),
    json(),
    sourceMaps(),
    process.env.NODE_ENV === 'production '
      ? terser({
          // @ts-ignore
          compress: {
            pure_funcs: ['console.log'],
          },
        })
      : undefined,
  ],
  output: [
    { dir: 'lib', assetFileNames: '[name][extname]' },
    {
      format: 'cjs',
      file: pkg.command,
      sourcemap: true,
    },
    {
      format: 'umd',
      file: pkg.umd,
      name: 'EasyDoc',
      sourcemap: true,
    },
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true,
    },
  ],
}
