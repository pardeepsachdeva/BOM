import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1),
//       width: theme.spacing(16),
//       height: theme.spacing(16),
//     },
//   },
// }));


 class AllProjects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             projects: []
        }
    }
    componentDidMount(){
        const axios = require('axios')
        axios({
            method: 'get',
            url : 'http://127.0.0.1:8000/api/projects/'
            }
        ).then(res => {
            console.log(res)
            this.setState({projects: res.data})
        })
    }
    
  render() {

        return (
            <div>
                <div >
                <Grid
                className="mt-3"
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
                >
                    <Typography variant="h2" align="center" gutterBottom>
                                        All Projects
                                    </Typography>
                    {
                        ("loading..." &&  this.state.projects.map(project => {
                            return (
                                <Grid item xs={12} sm={6} key={project.id}>

                                <Link component={RouterLink} to={`projects/${project.id}`} style={{ textDecoration: 'none' }}> 
                                <Paper elevation={6} style={{flexGrow: 1, width: 350, height: 250}}>
                                    <Typography variant="h5" align="center" gutterBottom>
                                         {project.project_name}
                                    </Typography>
                                    <div className="mt-2">
                                    <Typography variant="body1" gutterBottom>
                                        {project.project_desc}
                                    </Typography>
                                    </div>
                                </Paper>

                                </Link>
                                </Grid>
                            )
                        })) 
                    }
  
</Grid>
</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

const connectedAllProjects = connect(mapStateToProps, mapDispatchToProps)(AllProjects)
export { connectedAllProjects as AllProjects }