import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
 
    topBar:{
        width : "100%",
        display:"inline-block",
        background: "#1565c0",
        shadow :"0px 0px 5px #646464",
        color: "#fff", 

        '& h6': {
            width : "30%",
            display:"inline-block", 
            margin:0,  
            padding: "1em 0 1em 0em",
            "font-size": "1.2em"
        },

    },
   
    toolBar:{
        width : "100%",
        display:"inline-block",
    },
    social_iconlist:{ 
        width : "22%",
        float : "right", 
        display: 'inline-flex',
        marginTop: "0.7em" 
    }, 
    
    notification_list: {
        width: '45%',
        marginTop:"0.5em",
        marginLeft:"1em", 

        '& button': {
            padding : 0,
            display: 'inline-block',
         },

        '& span': {
            marginLeft : "15%" 
        },

    },

    widget:{
        width: '48%',
        margin: "1%",
        boxShadow : "0 0 10px #0000001c",
        borderRadius: 15,
        // display:'inline-block',
        float:"left",
        verticalAlign: 'top',
        height : '80vh', 
    }, 

    widget1:{
        widgetContent :{
          marginTop: '5em'
        }
      },
 
    titleBar:{
        display:'inline-block',
        width : "100%", 

        '& h5': {
            fontSize: 14,
            textTransform: 'uppercase',
            padding: '22px 20px',
            color:'#424242',
            display:'inline-block'
         } 
    },  

    titleBarRight:{
        display:'inline-block', 
        float:'right',
        margin:'2% 3%'
    },

    sideBar:{
        display:'inline-block',
        
    }, 

    widgetContent:{ 
        display:'inline-block',
        width : "95%",  
        height : '65vh', 
        padding : "0 0%",
        marginLeft: '2%'
    },

    modeChange :{
        display: 'flex',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center', 
      },

      ratings:{
          display:'inline-block' 
      },
      pie_chart:{
        display:'inline-block',
        width:"100%",
        height:"88%"
      },
      bar_chart:{
        display:'inline-block',
        width:"100%",
        height:"85%"
      },
      photoFrame:{
        display:'inline-block',
        width:"100%" 
      },
      
      selBox:{
        display:'inline-block'
      },
 
      widget1:{
        marginLeft : "1%" 
      },

      widget2:{
        marginLeft : "1%" 
      },

      barChart:{
        display:'inline-block',
        width:"100%",  
        // padding: "5% 5%",
        height :"80%"
      },
      tableList:{
        display:'inline-block',
        width:"100%",  
        // padding: "1% 3% 2% 3%",
      }

}));

export default useStyles;

 