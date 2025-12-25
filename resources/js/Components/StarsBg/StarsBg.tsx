import { useEffect, useState } from "react"

type Star = {
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
}
type Meteor = {
    size: number;
    x: number;
    y: number;
    delay: number;
    animationDuration: number;
}

export const StarsBg = () => {
    const [stars, setStars] = useState<Star[] | null>(null);
    const [meteors, setMeteors] = useState<Meteor[] | null>(null);

    const generateStars = () => {
        const starsNum = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );
        const newStars: Star[] = [];

        for (let i = 0; i < starsNum; i++) {
            const star: Star = {
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            }
            newStars.push(star)          
        }
        setStars(newStars);
    }

    const generateMeteor = () => {
        const meteorNum = 7;
        const newMeteors: Meteor[] = [];

        for (let i = 0; i < meteorNum; i++) {
            const meteor: Meteor = {
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 2
            }
            newMeteors.push(meteor)          
        }
        setMeteors(newMeteors);
    }

    useEffect(() => {
        generateStars();
        generateMeteor();

        const handleResize = () => {
            generateStars();
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])
    return(
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
            {stars && 
                stars.map((star, idx) => {
                    return (
                        <div key={idx} className="star animate-pulse-subtle" style={{
                            width: star.size + "px",
                            height: star.size + "px",
                            left: star.x + "%",
                            top: star.y + "%",
                            opacity: star.opacity,
                            animationDuration: star.animationDuration + "s"
                        }}/>
                    )
                })
            }

            {meteors && 
                meteors.map((meteor, idx) => {
                    return (
                        <div key={idx} className="meteor animate-meteor" style={{
                            width: meteor.size * 50 + "px",
                            height: meteor.size + "px",
                            left: meteor.x + "%",
                            top: meteor.y + "%",
                            animationDelay: meteor.delay.toString(),
                            animationDuration: meteor.animationDuration + "s"
                        }}/>
                    )
                })
            }
        </div>
    )
}