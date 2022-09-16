import { Box } from "@mui/system"
import AppBarMenu from '../../global/components/AppBarMenu'
import { ComingSoon } from "../ComingSoon/ComingSoon";

const NFT = function(){
    return(
        <Box>
            <AppBarMenu/>
            <Box>
                <ComingSoon/>
            </Box>
        </Box>
    )
}

export default NFT;