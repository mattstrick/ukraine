import Layout from '../../components/layout'
import Hero from '../../components/SubPage/Hero/hero';
import sheets from "../../lib/sheets";
import Content from '../../components/content';
import BlueCallout from '../../components/blueCallout';
import Link from "next/link";

export default function ForLargeOrganizations(props) {
  return (
    <div>
    <Layout>
      <div className="w-full md:w-5/6 lg:w-2/3 pb-16">
      <div className="mt-12">
        <Link href="/for-fundraisers" passHref>  
            <a>{'<'} Back</a>
        </Link>
      </div>
        <Hero
          title="For Bigger Organizations"
          description=""
        />
        <div className="mt-24">
          <h1 className="font-semibold text-2xl lg:text-4xl">
            Who are we?
          </h1>  
          <br />        
          <p>
          We are a group of volunteers who came together to support the Ukrainian 
          people and military in a time of need. We have created a single website 
          that hosts information about all major donation avenues for international 
          donors. We are helping smaller volunteer groups working locally in 
          Ukraine receive emergency funding.
          </p>          
        </div>
        </div>
    </Layout>
    <Content>
        <div className="pt-24">
          <h1 className="font-bold text-2xl lg:text-4xl text-uablue-default">Why have we started helpuanow.org?</h1>
          <br />
          <p>
            <b>Some of the major reasons why foreigners choose not to donate include:</b>
          </p>
          <ul>
          <li className='mt-2'>👉 Not knowing what the money will be spent on</li>
          <li className='mt-2'>👉 Not understanding Ukrainian descriptions on the donations page</li>
          <li className='mt-2'>👉 Not knowing who to contact when considering large donations</li>
          </ul>
          <br /> 
          <BlueCallout>
            <p>
                We want to help you communicate this information.          
            </p>
          </BlueCallout>  
        </div>
        <div className="mt-24">
          <h1 className="font-bold text-2xl lg:text-4xl text-uablue-default">
            How to get featured?
          </h1>          
          <br />
          <p>
            Please submit this form to be featured: <a href='https://forms.gle/k7X5SMjTBovUpfqFA' className=" font-medium text-lg text-uablue-default underline underline-offset-4 hover:text-uablue-accent"  target='_blank' rel='noreferrer'>link</a>. You can submit it in Ukrainian and we will take over the translation!
          </p>
        </div>
        <div className="mt-24">
          <h1 className="font-bold text-2xl lg:text-4xl text-uablue-default">
            Do you still need a separate donation page in English?
          </h1>          
          <br />
          <p>
          Yes! <b>We are not taking over the donations process for you and will never ask to hold 
          custody of the funding you receive.</b> 
          <br />We are just helping you communicate your fundraising needs to foreign supporters.
          <br /><br />
          Your donations page must be in English and must be hosted on the official website or social 
          media platform of your organization! Please make sure that your donation page includes the 
          following information:
          <br /><br />
          <ul>
          <li className='mt-2'>👉 <b>A brief description of your organization in English:</b> 
          <br /> Please include any relevant background, major institutional backers, and past accomplishments.</li>
          <li className='mt-2'>👉 <b>Explanation of how the money will be used:</b> 
          <br />This is very important! Your explanation does not have to be extremely specific. Please do not include any sensitive information (such as the number of units, etc.)</li>
          <li className='mt-2'>👉 <b>How much approximately you are trying to raise</b></li>
          <li className='mt-2'>👉 <b>Any social media links that can help donors better vet this donation request:</b> 
          <br />This could be links to previous fundraisers supported by many people; links to social media posts with photos of past donations; links endorsements by influential individuals, institutions, or media; or other evidence of you activity</li>
          <li className='mt-2'>👉 <b>Payment method and details:</b> 
          <br />We will not host any payment details on saveuanow.org!</li>
          <li className='mt-2'>👉 <b>Contact for big donations:</b> 
          <br />Preferably an English speaker</li>
          </ul>
          <br /><br />
          <BlueCallout>
            <b>If you need help creating your donations page or translating it to English, our volunteers can help!</b> Please fill out this form with as much detail as possible:             
            <a 
                href='https://forms.gle/YYkY5PMh1vp8ThjcA' 
                className="font-medium text-lg text-uablue-default underline underline-offset-4 hover:text-uablue-accent" 
                target='_blank' 
                rel="noreferrer"
            >
                https://forms.gle/YYkY5PMh1vp8ThjcA
            </a>
            <br /><br />
            Note: At the moment our volunteers prioritize helping smaller fundraisers for on-the-ground groups, but we are happy to help you when we have the capacity!
          </BlueCallout>
          </p>          
        </div> 
        <div className="mt-24">
          <h1 className="font-bold text-2xl lg:text-4xl text-uablue-default">
            How can you promote better relationships with foreign donors?
          </h1>          
          <br />
          <p>
          You can upload photo evidence of donation delivery here: <a href='https://forms.gle/n5egjsRgbxr4Ga7B7' className="font-medium text-lg text-uablue-default underline underline-offset-4 hover:text-uablue-accent" target='_blank' rel='noreferrer'>link</a>          
          </p>
          <br />
          <p>
          This is optional, and we understand it might not be possible given the large volume of donations you’re processing. You don’t have to upload every single donation, but you can use this space to communicate occasional updates and foster a relationship with your backers.
          </p>
          <br />
          <p>
          The submission will appear on your page on helpuanow.org.
          </p>
        </div>       
    </Content>
    </div>
  );
}

export async function getStaticProps() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Payment Method",
  });
  const [title, ...rows] = response.data.values;

  return {
    props: {
      title,
      rows,
    }
  }
}
