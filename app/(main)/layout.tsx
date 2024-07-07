import { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='max-w-[1200px] w-full flex-1 pb-[100px]'>
      {children}
    </div>
  );
};

export default Layout;