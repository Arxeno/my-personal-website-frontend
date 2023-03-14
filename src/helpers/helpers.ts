const toggleDrawerNav = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.stopPropagation();
  document.querySelector('#drawerNav')?.classList.toggle('open-drawer-nav');
};

const closeDrawerNav = () => {
  document.querySelector('#drawerNav')?.classList.remove('open-drawer-nav');
};

const toggleDrawerContact = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.stopPropagation();
  document
    .querySelector('#drawerContact')
    ?.classList.toggle('open-drawer-contact');
};

const closeDrawerContact = () => {
  document
    .querySelector('#drawerContact')
    ?.classList.remove('open-drawer-contact');
};

const helpers = {
  toggleDrawerNav,
  closeDrawerNav,
  toggleDrawerContact,
  closeDrawerContact,
};

export {
  toggleDrawerNav,
  closeDrawerNav,
  toggleDrawerContact,
  closeDrawerContact,
};
export default helpers;
