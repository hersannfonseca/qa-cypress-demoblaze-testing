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
                nodejs(nodeJSInstallationName: 'NodeJS-18') {
                    script {
                        if (isUnix()) {
                            sh 'npm install'
                        } else {
                            bat 'npm install'
                        }
                    }
                }
            }
        }
        stage('Run tests') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS-18') {
                    script {
                        if (isUnix()) {
                            sh 'npm run cy:run-ci'
                        } else {
                            bat 'npm run cy:run-ci'
                        }
                    }
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