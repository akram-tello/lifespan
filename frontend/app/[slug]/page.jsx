import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";

const Page = async ({ params }) => {
    const req = await fetch(`https://mindvally.akramtello.com/wp-json/wp/v2/pages?_fields=id,slug,title,content&slug=${params.slug}`, {
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await req.json();
  
    const redirectScript = `
      <script>
        document.addEventListener("DOMContentLoaded", function() {
          var slug = ${JSON.stringify(params.slug)};
          if (slug === 'home') {
            window.location.href = '/';
          } else if (!${data.length}) {
            window.location.href = '/error';
          }
        });
      </script>
    `;
  
    console.log('data', data);
  
    return (
      <>
        <Header />
        <div dangerouslySetInnerHTML={{ __html: redirectScript }} />
        <div className="container space" dangerouslySetInnerHTML={{ __html: data.length > 0 ? data[0].content.rendered : '' }} />
        <MarqueeComponent />
        <Footer />
      </>
    );
  }
  
  export default Page;
  