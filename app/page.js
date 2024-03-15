// Agregando un título y descripción a la página
// Referencia: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata = {
  title: "Home",
  description: "Esta es la página de inicio",
};

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 className="title">Hola mundo!</h1>
        <p className="primer-parrafo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          consectetur odio quis ornare fermentum. Suspendisse vitae mi in nibh
          lacinia elementum non eget risus. Donec tristique semper risus non
          tempus. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Phasellus est turpis, maximus nec consequat
          sit amet, bibendum vitae erat. Nulla ac urna tortor. Donec eu tellus
          blandit, malesuada risus quis, consequat augue. Aenean in iaculis
          tortor. Sed metus lorem, dignissim ut vulputate et, egestas quis
          justo. Vestibulum vehicula est lacus, id venenatis tellus elementum
          eu. Quisque volutpat commodo ante non hendrerit. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae;
        </p>
        <p>
          Integer ac elit sit amet quam porta condimentum. Donec sem augue,
          efficitur luctus bibendum vitae, tincidunt ut turpis. Nullam cursus
          eros vel nisi faucibus, eu suscipit lectus molestie. Nullam et
          placerat purus, et hendrerit ex. Pellentesque est ipsum, iaculis sed
          metus vitae, pretium dignissim odio. Nullam tincidunt mauris ac dolor
          scelerisque, vel sagittis mi mattis. Proin porta mauris sit amet mi
          pulvinar condimentum. Sed vitae tristique justo, pulvinar tincidunt
          massa. Phasellus nulla enim, gravida vitae lorem non, efficitur mollis
          massa. Vestibulum vel lacinia sem. Duis ac odio in nunc luctus feugiat
          ullamcorper ac massa.
        </p>
      </div>
    </>
  );
}
