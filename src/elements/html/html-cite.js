import {RXElement} from "../rxelement"
import {addonUtilColor} from "../schemas/utilities/color"
import {addonUtilBorder} from "../schemas/utilities/border"
import {addonUtilPadding} from "../schemas/utilities/padding"
import {addonUtilMargin} from "../schemas/utilities/margin"
import {addonUtilText} from "../schemas/utilities/text"
//import {addonHeadingPseudo} from "../../schemas/heading/pseudo-heading"
//import {addonHeadingDisplay} from "../../schemas/heading/display"
//import {addonUtilBorder} from "../../schemas/utilities/border"

export class HTMLCite extends RXElement{
  constructor() {
    super()
    this.toolboxInfo.groupId = 'groupHtml'
    this.toolboxInfo.elementId = 'htmlCite'
    this.toolboxInfo.elementName = "Cite"
    this.className = 'HTMLCite'

    this.editMarginStyle = {}

    //this.groups.paragraphOptions = {
    //  label:'Cite Options'
    //}
    this.$meta.tag = 'cite'
    this.$meta.innerHTML = "Cite text ..."
    this.label = "cite"

    this.becomeToTextfield()
    addonUtilColor(this)
    addonUtilBorder(this)
    addonUtilMargin(this)
    addonUtilPadding(this)
    addonUtilText(this)
    //addonHeadingPseudo(this, 'typographyOptions')
    //addonHeadingDisplay(this, 'typographyOptions')
  }

  make(){
    return new HTMLCite
  }
  
}