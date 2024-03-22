pipeline {
   agent any
            stages {
                   stage('build'){
                           steps{ 
                    nodejs('Hackathon') {           
                         sh 'npm install --legacy-peer-deps'
                         sh 'npm run build -- --output-path=build'
                    }
                   }
                 }
                 
                                  
               stage('deployment'){
                    steps{
                       sh 'tar -czvf dist.tar.gz build'
                       sh 'scp dist.tar.gz jenkins@54.196.158.30:/var/www/html/justiceleague-fe'
                       sh 'ssh jenkins@54.196.158.30 "cd /var/www/html/justiceleague-fe/ && tar -xvzf dist.tar.gz"'
                       }
                     }
                 }
         post{
           always {
                  cleanWs()
              }
     }
}
