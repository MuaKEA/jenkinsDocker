pipeline {
    agent any
    environment {
        RESPONSE_1 = "Hello from Container 1"
        RESPONSE_2 = "Hello from Container 2"
        RESPONSE_3 = "Hello from Container 3"
        PORT_1 = "3000"
        PORT_2 = "3001"
        PORT_3 = "3002"
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
        stage('Build Docker Images') {
            steps {
                script {
                    sh """
                        docker build --build-arg RESPONSE_MESSAGE='${RESPONSE_1}' --build-arg PORT='${PORT_1}' -t container1:latest .
                    """
                    sh """
                        docker build --build-arg RESPONSE_MESSAGE='${RESPONSE_2}' --build-arg PORT='${PORT_2}' -t container2:latest .
                    """
                    sh """
                        docker build --build-arg RESPONSE_MESSAGE='${RESPONSE_3}' --build-arg PORT='${PORT_3}' -t container3:latest .
                    """
                }
            }
        }
        stage('Run Containers') {
            steps {
                script {
                    sh 'docker run -d -p 3000:3000 --name container1 container1:latest'
                    sh 'docker run -d -p 3001:3001 --name container2 container2:latest'
                    sh 'docker run -d -p 3002:3002 --name container3 container3:latest'
                }
            }
        }
        stage('Verify Containers') {
            steps {
                script {
                    sleep 10
                    sh 'curl -s http://host.docker.internal:3000 || echo "Container 1 failed"'
                    sh 'curl -s http://host.docker.internal:3001 || echo "Container 2 failed"'
                    sh 'curl -s http://host.docker.internal:3002 || echo "Container 3 failed"'
                }
            }
        }
        stage('Cleanup') {
            steps {
                script {
                    sh 'docker stop container1 container2 container3 || true'
                    sh 'docker rm container1 container2 container3 || true'
                }
            }
        }
    }
}
