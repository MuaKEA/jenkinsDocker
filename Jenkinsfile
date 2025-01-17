pipeline {
    agent any
    environment {
        RESPONSE_1 = '"Hello from Container 1"'
        RESPONSE_2 = '"Hello from Container 2"'
        RESPONSE_3 = '"Hello from Container 3"'
        PORT_1 = '"3000"'
        PORT_2 = '"3001"'
        PORT_3 = '"3002"'
    }
    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    sh """
                        docker build --build-arg RESPONSE_MESSAGE=${RESPONSE_1} --build-arg PORT=${PORT_1} -t name:container1 .
                    """
                    sh """
                        docker build --build-arg RESPONSE_MESSAGE=${RESPONSE_2} --build-arg PORT=${PORT_2} -t name:container2 .
                    """
                    sh """
                        docker build --build-arg RESPONSE_MESSAGE=${RESPONSE_3} --build-arg PORT=${PORT_3} -t name:container3 .
                    """
                }
            }
        }
        stage('Run Containers') {
            steps {
                script {
                    sh 'docker run -d -p 3000:3000 name:container1'
                    sh 'docker run -d -p 3001:3001 name:container2'
                    sh 'docker run -d -p 3002:3002 name:container3'
                }
            }
        }
        stage('Verify Containers') {
            steps {
                script {
                    sleep 10
                    sh 'curl http://localhost:3000'
                    sh 'curl http://localhost:3001'
                    sh 'curl http://localhost:3002'
                }
            }
        }
    }
}

