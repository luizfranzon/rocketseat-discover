import React, { useState } from 'react';
import './styles.css'

import Card from "../../components/Card"

function Home() {
    const [studentName, setStudentName] = useState("Nome não definido");
    const [students, setStudents] = useState([])

    function handleAddStudent() {
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
        };

        setStudents(prevState => [...prevState, newStudent])
    }

    return (
        <div className="container">

            <header>
                <h1>Lista de Presença</h1>
                <div>
                    <strong>Luiz</strong>
                    <img src="https://github.com/luizfranzon.png" alt="" />
                </div>
            </header>
            <input
                type="text"
                placeholder="Nome do usuário"
                onChange={e => setStudentName(e.target.value)}
            />
            <button onClick={handleAddStudent}>Adicionar</button>

            {
                students.map(student => (
                    <Card 
                        key={student.time}
                        name={student.name} 
                        time={student.time}
                    />
                ))
            }

        </div>
    )
}

export default Home
