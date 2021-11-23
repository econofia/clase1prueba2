import { AppBar} from "@material-ui/core";
import CartWidget from "./CartWidget";
import {Wrapper, Logo, MenuItem, Left, Center, Right} from './styledComponents';

const Navbar = () => {
    return (
      <AppBar position="relative">
      <Wrapper>
      <Left>
        <Logo> PARDERUBIAS.IMPORTADOS</Logo>
      </Left>
      <Center>
      <Link to='/category/1'> <MenuItem> REMERAS</MenuItem></Link>
      <Link to='/category/1'><MenuItem> ACCESORIOS</MenuItem></Link>
      <Link to='/category/1'><MenuItem> MAQUILLAJE</MenuItem></Link>
      <Link to='/category/1'><MenuItem> ROPA INTERIOR</MenuItem></Link>
      </Center>
      </Wrapper>
      </AppBar>
    )
}
