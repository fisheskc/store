import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import UserIcon from './UserIcon';
import SignOutLink from './SignOutLink';
import { SignedOut, SignedIn, SignInButton } from '@clerk/nextjs';

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-[100px]'>
          <LuAlignLeft className='w-6 h-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
        <SignedOut>
           <DropdownMenuItem>
              <SignInButton mode='modal'>
                  <button className='w-full text-left'>Login</button>
              </SignInButton>
            </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left'>Register</button>
            </SignInButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {links.map((link) => {
              return (
                <DropdownMenuItem key={link.href}>
                  <Link href={link.href} className='capitalize w-full'>
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
          })}
        <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;