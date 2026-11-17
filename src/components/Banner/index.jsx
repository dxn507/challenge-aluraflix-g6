import styled from "styled-components"
import bannerCard from "/img/aluraLatam.jpg"

const BannerEstilizado=styled.section`
    width: 100%;
    min-height:calc(100vh - 6rem) ;
    height:auto;
    background-image:linear-gradient(rgba(179, 160, 160, 0.5),rgba(0,0,0,0.5)),url(/../img/hero.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
     @media (max-width: 768px){
       width: 100%;
        min-height:calc(100vh) ;
      
  }
`
const BannerHero=styled.div`
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: space-between;
    gap: 1rem;
     @media (max-width: 768px){
      width: 90%;
      flex-direction: column;
      height:auto;

  }
`
const TextoDeBanner=styled.div`
  font-size: 1.2rem;
    letter-spacing: 1px;
    color: #fff;
    flex:0 0 50%;
`
const CardDeBanner=styled.div`
  flex:0 0 50%;
  img{
    width: 100%;
    height: auto;
    display: block;
}
`
const Titulo = styled.h2`
  font-size:40px;
    font-family: Lato, sans-serif;
    padding: 20px;
    color: #fff;
    background-color: rgb(91, 157, 187);
    display: inline-block;
    margin: 1rem 0;
`
const Parrafo =styled.p`
  font-size: 1.2rem;
    letter-spacing: 1px;
    color: #fff;
`

const Subtitulo =styled.h3`
  font-size:34px;
    font-family: Lato, sans-serif;
    color: #fff;
    margin: 1rem 0;
`
const Banner = ()=>{
    return (
        <BannerEstilizado>
          <BannerHero>
            <TextoDeBanner>
                   <Titulo>Front End</Titulo>
                   <Subtitulo>Challenge React</Subtitulo>
                   <Parrafo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta accusantium, accusamus aspernatur magni officia unde numquam dolor quod aliquid fugit obcaecati, doloremque repellendus quos veritatis earum libero expedita nulla beatae?</Parrafo>

            </TextoDeBanner>
            <CardDeBanner>
              <img src={bannerCard} alt="card alura latam" />
            </CardDeBanner>

          </BannerHero>
          
        </BannerEstilizado>
    )
}

export default Banner
