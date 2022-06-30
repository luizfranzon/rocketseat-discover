import React, { useState } from 'react';
import './styles.css'

import Card from "../../components/Card"

function Home() {
    const [studentName, setStudentName] = useState("Luiz");
    return (
        <div className="container">

            <h1>Lista de Presença</h1>

            <span>Nome: {studentName}</span>

            <input 
                type="text" 
                placeholder="Nome do usuário"
                onChange={e => setStudentName(e.target.value)}
            />
            <button>Adicionar</button>

            <Card name="Luiz" time="10:05:40"/>
            <Card name="Daniel" time="11:12:47"/>

        </div>
    )
}

export default Home
