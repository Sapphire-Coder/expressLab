require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const fs = require('fs')

app.engine('hypatia', (filePath, options, callback) => { 
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err)
      const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
      return callback(null, rendered)
    })
})
app.set('views', './views')
app.set('view engine', 'hypatia')

app.listen(port, () => console.log(`Listening at port ${port}`))

app.get('/page1', (req, res) => {
  res.render('template1', { title: 'Page 1', message: 'Welcome to Page 1', content: 'This page uses template 1!' })
  }
)

app.get('/page2', (req, res) => {
  res.render('template1', { title: 'Page 2', message: 'Welcome to Page 2', content: 'This page uses template 1!' })
  }
)

app.get('/page3', (req, res) => {
  res.render('template1', { title: 'Page 3', message: 'Welcome to Page 3', content: 'This page uses template 1!' })
  }
)

app.get('/page4', (req, res) => {
  res.render('template1', { title: 'Page 4', message: 'Welcome to Page 4', content: 'This page uses template 1!' })
  }
)

app.get('/page5', (req, res) => {
  res.render('template1', { title: 'Page 5', message: 'Welcome to Page 5', content: 'This page uses template 1!' })
  }
)

app.get('/page6', (req, res) => {
  res.render('template2', { title: 'Page 6', message: 'Welcome to Page 6', content: 'This page uses template 2!' })
  }
)

app.get('/page7', (req, res) => {
  res.render('template2', { title: 'Page 7', message: 'Welcome to Page 7', content: 'This page uses template 2!' })
  }
)

app.get('/page8', (req, res) => {
  res.render('template2', { title: 'Page 8', message: 'Welcome to Page 8', content: 'This page uses template 2!' })
  }
)

app.get('/page9', (req, res) => {
  res.render('template2', { title: 'Page 9', message: 'Welcome to Page 9', content: 'This page uses template 2!' })
  }
)

app.get('/page10', (req, res) => {
  res.render('template2', { title: 'Page 10', message: 'Welcome to Page 10', content: 'This page uses template 2!' })
  }
)