import classes from "./Card.module.css"
function Card(props){
/*children is default prop that all has inside app.js after adding card everything between <Card> will be passed here using childrem(wrapping jsx)*/
    return(
        <div className={classes.card}>
            {props.children}</div>
    );
}
export default Card;