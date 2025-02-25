// import { HorizontalScrollList } from "../../components"
import DragAndUpload from "../../components/DragAndUpload/DragAndUpload"
import "./PublishPage.scss"

const PublishPage = () => {
    return (
        <div>
            <div className="publish-page-drag-and-upload-container">
                <DragAndUpload />
            </div>
            {/* <HorizontalScrollList /> */}
        </div>
    )
}

export default PublishPage
