import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <a>
                <span>Márcio Gazzinelli</span>
            </a>
            <nav>
                <p>Home</p>
                <p>Sobre</p>
                <p>Projetos</p>
                <p>Contatos</p>
            </nav>
        </header>
    )
}
export default Header