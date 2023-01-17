function Button({bgcolor,click,text}){
    
    return(
        <button style={{
            backgroundColor: bgcolor,
            margin: 4,
            border: '2px solid',
            borderRadius: 4,
            
        }}
        onClick={click}
        >
            {text}
        </button>
    )
}
export default Button;