import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Bar, Pie, HorizontalBar } from 'react-chartjs-2'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h2>Get in touch with me</h2>

    <div class="container">

      <div>
        <ul class="ul-contact">
          <li><a href="https://www.linkedin.com/in/nicklas-barklund/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          <li><a href="https://github.com/Bikelund" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </div>

      <div class="buddy"></div>

    </div>

    <Bar
    data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Pizzor konsumerade per månad',
            backgroundColor: 'pink',
            borderColor: 'green',
            borderWidth: 1,
            hoverBackgroundColor: 'green',
            hoverBorderColor: 'pink',
            data: [5, 9, 4, 1, 6, 5, 2],
          }
        ]
      }}
    width={100}
    height={50}
    options={{
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
    }}
/>

 <Pie data={{
        labels: ['Pacman', 'Not Pacman'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: ['yellow', 'black'],
            borderColor: 'black',
            borderWidth: 1,
            data: [80, 20],
          }
        ]
      }}
    width={100}
    height={50}
    options={{
    maintainAspectRatio: true,
    }}
/>
    
<HorizontalBar data={{
        labels: ['ATR Downtown', 'ATR Town', 'Cinelli Vigorelli', 'Havoc', 'Panasonic', 'Pompino', 'Trainer'],
        datasets: [
          {
            label: 'Most used bikes (kilometer)',
            backgroundColor: ['#FFE4A8', '#E8C899', '#FFD6B4', '#E8B199', '#FFB6A8', '#E89999', '#FFA8D2'],
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: ['#FFE4A8', '#E8C899', '#FFD6B4', '#E8B199', '#FFB6A8', '#E89999', '#FFA8D2'],
            hoverBorderColor: ['#FFE4A8', '#E8C899', '#FFD6B4', '#E8B199', '#FFB6A8', '#E89999', '#FFA8D2'],
            data: [1598, 547, 890, 20, 83, 548, 371]
          }
        ]
      }}
    width={100}
    height={50}
    options={{
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
    }}
/>
  </Layout>
)

export default ContactPage