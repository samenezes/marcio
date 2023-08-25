import  './Contcard.module.css'
// eslint-disable-next-line react/prop-types
function Contcard({crit1, crit2, crit3}) {
    return(
        <section className='p'>
            <p>{crit1}</p>
            <p>{crit3}</p>
        </section>
    )
}

export default Contcard
