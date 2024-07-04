const fn = () => {
  console.log('Hello from helper.js');
  console.log(__dirname);
  console.log(process.cwd());
};

// terminal ACER@DESKTOP-UF8LC79 MINGW64 /d/okten/okten-lesson-nodejs (lesson-1)
// console.log(__dirname); D:\okten\okten-lesson-nodejs\some_dir
// console.log(process.cwd()); D:\okten\okten-lesson-nodejs

// fn();

console.log('helper.js!!!');

module.exports = {
  fn,
}
