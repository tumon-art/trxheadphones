const Header = () => {
  const num = [{ a: "4" }, { a: "2" }, { a: "3" }, { a: "2" }];
  num.sort((a, b) => parseFloat(a.a) - parseFloat(a.a));

  return <>header</>;
};

export default Header;
