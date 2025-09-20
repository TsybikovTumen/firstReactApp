import './styles.css'

const partners = [
    { id : 1, name : "test1", link : "", image : ""},
    { id : 2, name : "test2", link : "", image : ""},
    { id : 3, name : "test3", link : "", imgae : ""},
    { id : 4, name : "test4", link : "", image : ""},
    { id : 5, name : "test5", link : "", image : ""},
    { id : 6, name : "test6", link : "", image : ""},
]

const Partners = () => {
    return (
        <div style={{marginTop: "5%"}}>
            <h1 style={{fontFamily: "Montserrat"}}>Наши партнеры</h1>
            <ul className='partners-list'>
                 {partners?.map((item, index) => (
                    <li key={index}>
                        <image src={item.image} href={item.link}/>
                    </li>
                ))}    
            </ul>
        </div>
    );
};

export default Partners;
