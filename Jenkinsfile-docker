pipeline {

    agent any

    stages {
        stage('Building image') {
            steps{
                script {
                    sh 'docker build --tag foodblog:latest .'
                }
            }
        }
        stage('Deploy image'){
            steps{
                script{
                    sh 'docker run --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true foodblog:latest'
                    sh 'echo $! > .pidfile'
                    input message: 'Finished using the web site? (Click "Proceed" to continue)'
                    sh './scripts/kill.sh'
                }
            }
        }
    }
}