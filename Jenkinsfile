pipeline {
    agent any
    environment {
        PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin:$PATH"
    }
    stages {
        stage('Check Docker') {
            steps {
                script {
                    sh 'which docker || echo "Docker not found"'
                    sh 'docker version'
                }
            }
        }
        stage('Run Hello World') {
            steps {
                script {
                    sh 'docker run hello-world'
                }
            }
        }
    }
}
