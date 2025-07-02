import {FaHeart} from 'react-icons/fa';
import { Button } from '../ui/button';

// The type will be equal to string
function FavoriteToggleButton({productId}:{productId:string}) {
  return (
    <Button size='icon' variant='outline' className='p-2 cursor-pointer'>
      <FaHeart />
    </Button>
  )
}

export default FavoriteToggleButton
