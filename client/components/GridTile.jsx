import Box from '@mui/system/Box';
import RotateInOut3D from "@/animation/RotateInOut3D"

const GridTile = ({ children}) => (
  <RotateInOut3D
    duration={1 + Math.random()}
    delay={0.2 + Math.random()}
    offsetY={120}
  >
    <Box className='flex w-full h-full'>
    <Box className='flex w-full h-full pt-3 pb-4 justify-center items-center overflow-hidden flex-1'
        sx={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,.1) 0%, rgba(0,0,0,.25) 100%)",
        }}
      >
        {children}
      </Box>
    </Box>
  </RotateInOut3D>
)

export default GridTile