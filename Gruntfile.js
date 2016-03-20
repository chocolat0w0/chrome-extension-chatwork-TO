module.exports = function(grunt) {
  // 読み込むプラグインの設定
  var taskName;
  var pkg = grunt.file.readJSON('package.json');
  for(taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }

};
