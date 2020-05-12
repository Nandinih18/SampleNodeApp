pipeline {
   agent any
   stages {
  stage('Building image') {
    steps{
      script {
        docker.build("nandinih1806/samplenodeapp")
      }
    }
  }
      stage('Running image'){
         steps{
            script{
               docker.run("nandinih1806/samplenodeapp")
            }
         }
      }
}
 
}
