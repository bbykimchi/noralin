function Home(){

    const buzzwords =[
        "BRAND",
        "GROWTH",
        "IDEATION",
        "PRODUCTION",
        "AI STRATEGY",
        "BRAND"
    ]

    return(
        <div>
            <div className="logo">
            <img
            src="src\public\noralin_logo.png"
            width="250"
            height="150"
            />
            </div>
            <h1 className="company-name" width>NoraLin Consulting</h1>
            <div className="buzzword-container">
                <span className="static-text">Fueling your </span>
                <div className="scroll-box">
                    <div className="scroll-content">
                        {buzzwords.map((word, index) => (
                            <div key={index} className="scroll-item">
                                {word}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="buzzword-container">
                <div className="static-text">
                    with the strength of strategy, spark of creativity and stamina of sport
                </div>
            </div>
            <div className="button-container">
                <button className="contact-button">Contact</button>
            </div>
        </div>

    )
}
export { Home }