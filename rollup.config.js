import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import path from 'path';

const { LERNA_PACKAGE_NAME } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, 'src/index.js');
const OUTPUT_DIR = path.join(PACKAGE_ROOT_PATH, 'dist');

const formats = ['es', 'cjs'];

export default {
  plugins: [
    babel({
      babelrc: false,
      exclude: ['node_modules/**'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    commonjs(),
    filesize(),
  ],
  input: INPUT_FILE,
  external: ['@azz/bar', '@azz/baz', '@azz/foo'],
  output: formats.map(format => ({
    file: path.join(OUTPUT_DIR, `index.${format}.js`),
    format,
    name: LERNA_PACKAGE_NAME,
    sourcemap: true,
  })),
};
