pipeline {
    agent any
    stages {
        stage('Git Checkout') {
            steps {
                script {
                    git branch: 'main',
                        url: 'https://github.com/hersannfonseca/qa-cypress-demoblaze-testing'
                }
            }
        }
        stage('Install dependencies') {
            steps {
                nodejs(NodeJS_Installation_Name: 'NodeJS-18') { // Usa el nombre que le diste en el paso 3
                    sh 'npm install'
                }
                script {
                    bat 'npm install'
                }
            }
        }
        stage('Run tests') {
            steps {
                script {
                    bat 'npm run cy:run-ci'
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/**'
        }
    }
}