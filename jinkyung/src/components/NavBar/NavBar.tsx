
import  * as S from './NavBar.style'
import logo from '../../assets/logo.png'
import Github from '../../assets/github_light.svg'

export default function NavBar() {
  return (
    <S.Container>
      <S.Center>
        <S.Logo src={logo} />
        <S.H1>Jinkyung</S.H1>
      </S.Center>
      <S.Sub src={Github} alt="s" height={50} onclick={()=>window.location.href = 'https://github.com/VariaQuality/JinKyung.github.io'}/> 
    </S.Container>
  )
}
