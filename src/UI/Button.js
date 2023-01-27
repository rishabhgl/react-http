import styles from './Button.module.css';

const Button = (props) => {
    return ( <button className = {styles.button} onClick = {props.onClick} type = {props.type} disabled = {props.disabled}>
        {props.children}
    </button> );
}
 
export default Button;