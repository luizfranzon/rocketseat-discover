import { useEffect, useState } from "react"

import { SquaresFour, PawPrint, User, Gear, MagnifyingGlass } from "phosphor-react"

import styles from "./Sidebar.module.css"

import Logo from "../../assets/logo.svg"
import MenuButton from "../../assets/menu.svg"
import VetIcon from "../../assets/vet.svg"
import LogOut from "../../assets/log-out.svg"

export function Sidebar() {

    const [userData, setUserData] = useState({})

    useEffect(() => {
        fetch("https://api.github.com/users/luizfranzon")
            .then(response => response.json())
            .then(data => {
                setUserData({
                    name: data.name,
                    avatar: data.avatar_url
                })
            })
    })

    return (
        <aside className={styles.Sidebar}>
            <section>
                <header className={styles.Header}>
                    <img src={Logo} alt="" />
                    <button className={styles.MenuButton}><img src={MenuButton} alt="" /></button>
                </header>
                <section className={styles.buttonsSection}>
                    <div className={`${styles.searchButton}`}>
                        <MagnifyingGlass size={30} color="#084236" />
                        <input className={styles.searchButtonInput} type="text" placeholder="Buscar"/>
                    </div>
                    <div className={styles.button}>
                        <SquaresFour size={30} color="#084236" />
                        <span>Dashboard</span>
                    </div>
                    <div className={styles.button}>
                        <PawPrint size={30} color="#084236" />
                        <span>Pets</span>
                    </div>
                    <div className={styles.button}>
                        <User size={30} color="#084236" />
                        <span>Clientes</span>
                    </div>
                    <div className={styles.button}>
                        <img width="30" src={VetIcon} alt="" />
                        <span>Clientes</span>
                    </div>
                    <div className={styles.button}>
                        <Gear size={30} color="#084236" />
                        <span>Clientes</span>
                    </div>
                </section>
            </section>
            <section className={styles.LoggedUserSection}>
                <div>
                    <img width="45px" src={userData.avatar} alt="" />
                    <div className={styles.LoggedUserData}>
                        <p>{userData.name}</p>
                        <span>Veterinário</span>
                    </div>
                </div>
                <img className={styles.logOutButton} width="24" src={LogOut} alt="" />
            </section>
        </aside>
    )
}