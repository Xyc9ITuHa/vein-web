import photo from "../../images/photo.png";

function Information() {
    return (

        <section id="information">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
                <div>
                    <h1 className="font-helvetica text-9xl text-dark-bg font-black">Who<br />We<br />Are.</h1>
                </div>
                <div className="shadow-xl h-fit rounded-2xl w-full bg-white flex flex-col">
                    <img src={photo} className="h-full w-auto right-0 overflow-clip rounded-tl-2xl rounded-tr-2xl" />
                    <p className="px-4 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo nisl, egestas sit amet pellentesque vel, consequat sed nisl. Praesent diam diam, pharetra ut malesuada sit amet, pulvinar commodo felis. Vivamus porttitor, odio id venenatis commodo, ante tortor porttitor elit, sit amet commodo orci lectus sed mauris. Sed semper, felis et aliquet congue, eros erat porttitor arcu, vitae viverra urna justo at elit. Aliquam semper condimentum sodales. Proin sed leo leo. Donec id purus eget nunc suscipit volutpat et quis quam. Praesent justo sem, posuere fermentum velit et, luctus maximus magna. Fusce et ullamcorper tellus. Etiam pharetra risus sit amet dapibus feugiat. </p>
                </div>
            </div>
        </section>

    );
}

export default Information;