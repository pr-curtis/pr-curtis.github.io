---
layout: page0
title: Network Analysis
permalink: /DH/network_analysis/
---

In November, 2017, I participated in the University of Chicago’s <a href="https://ceas.uchicago.edu/page/digital-humanities-workshop">“The Impact of the Digital on Japanese Studies,”</a> a workshop that sought to respond to the growing question of how digital methods are currently or could potentially change the way we approach Japanese Studies research. This page is a summary of many of the ideas that emerged from my work for this event and a guide to the process of approaching such a digital project for the first time.


<div class="container-figure quarter-width float-right">
  <figure>
    <img src="/images/network_center.png" alt="network center">
  </figure>

  <figcaption class="text-center">
  The center of your network looks like a very popular guy.
  </figcaption>
</div>

My presentation, “On Forgery,” was an attempt to probe the application of digital methods to my own research and premodern Japanese research at large. I therefore took a critical and exploratory approach to determining how and if these tools were useful within my own work to map and analyze my sixteenth-century communication networks premised upon documentary exchange. In experimenting with network analysis (and mapping) tools using my documentary corpus as a basis, I discerned the drawbacks in utilizing certain digital methods with premodern documents, reaffirmed previously conclusions using more tangible evidence, and discovered new possibilities for thinking about my documentary corpus and my methods of analysis.
<p></p>

<h3>Sources and Goals</h3>

The Matsugike monjo 真継家文書 (Matsugi Family Documents), the basis of my research and experiments in digital methods, is set of over 6,000 documents ranging from the twelfth to nineteenth century. The medieval portion and its supplementary materials (published as Chūsei imoji shiryo中世鋳物師史料 by Nagoya University and compiled by Amino Yoshihiko in 1982) [footnote here on the database] comprises several hundred records, including aristocratic tax decrees, warlord letters negotiating access to casters, and forged histories of metal caster associations.

My research focuses on the Matsugi collection and other documentary and diaristic sources as a source of information on the networks instigated and established by the courtier Matsugi Hisanao, who spearheaded court-based forgery production and actively sought out warrior and caster collaborators to create new social and economic bonds outside of the capital. I therefore decided to create network visualizations of the person-to-person connections created by letters exchanged between the court in Kyoto and warlords in the provinces as a test case to determine whether or not digital tools could provide new insights into these communication networks.
<p></p>
<h3>Tools and Methods</h3>

There are a number of network visualization tools available such as, Cytoscape, gephi, Palladio, NodeXL, etc., and for all, the learning curve can be quite steep, so although Cytoscape is among one of the less powerful tools for analyzing networks, it was also a good option for beginners like myself.  

My first task was to create sets of data. Determining that my data set would be 168 letters exchanged in a roughly 100-year span between courtiers in Kyoto and warrior and caster figures in the province. I carefully cataloged information on my documents, noting the title, document type, collection number, sender, recipient, the recipient’s social group, status within that social group if applicable (i.e., were they a highly-placed daimyo as opposed to a local kokujin warrior), the date of the document, and the approximate location of the sender or recipient. This was overambitious, as one of the limitations of any visualization is the number of elements you can represent at once. Narrowing my fields, after I had compiled this base information, I chose to organize my network in Cytoscape by names (sender/recipient), social group, status, and document.

I chose to prioritize the senders and recipients as my <b>edges</b> (simplistically put, start and end points) and the documents themselves, represented by their archival titles as my interaction in a directed network (directed indicating a relationship in which an exchange happens). Two charts had to be produced, one defining the edges and interaction, and one defining the nodes.

<center>
<div class="container-figure three-quarter-width">
  <figure>
    <img src="/images/Send_Recip_Exist_Doc_Edges.png" alt="edges data table">
  </figure>
        <figcaption class="text-center">
        A section of the "edges" data table that also includes the "interaction" (doc_title).
        </figcaption>
</div>
</center>
<p></p>
Note that in the above table there are a number of "unknown" figures with S# or R# labels. One discovery I made learning about the visualization data process was that Cytoscape would collapse names that were the same. Thus, if the sender or recipient of a letter was unknown, if they were not given an distinguishable label from all other unknown figures, the program erroneously assumed they were all the same person.

For the <b>nodes</b> (descriptive attributes of each entry), I was interested in seeing how the network operated across social groups (warriors, courtiers, artisans, etc.) and the status (high or low) therein. In part, this is because my corpus demonstrates the hierarchy of passing orders down the chain from daimyo to kokujin through several layers of command. The chart below shows my nodes table, where I had to indicate which writer (sender or recipient) from the edges table coincided with which descriptive attribute by social group and status.

<center>
<div class="container-figure half-width">
  <figure>
    <img src="/images/Send_Recip_Exist_Doc_Nodes.png" alt="edges data table">
  </figure>
        <figcaption class="text-center">
        A section of the "nodes" data table.
        </figcaption>
</div>
</center>
<p></p>

Note that both the edges and nodes table have instances in which multiple figures are listed as a single recipient. This is another complication born of the nature of the documents. When there are joint signature documents, or single documents that passed through the hands of more than one person how should they be coded? It is necessary to make judgment calls for the sake of visualizing your network. Here, I indicated letters with multiple senders or recipients as a single edge.

<div class="container-figure quarter-width float-right">
  <figure>
    <img src="/images/group_status_example.png" alt="network center">
  </figure>
        <figcaption class="text-center">
        An example of 9 warriors, 1 artisan, and 1 priest sending letters to one another.
        </figcaption>
</div>
For the visualization process in Cytoscape, I selected shapes and colors specific to the nodes (descriptive attributes) that characterized my edges (senders/recipients):

<li>triangles = courtier</li>
<li>squares = warriors</li>
<li>circles = artisans</li>
<li>hexagons = priests</li>
<li>parallelogram = merchants</li>
<p></p>
I used color to indicate status within that social group— darker colors the higher the status, lighter the lower the status. Of course, these categories must necessarily be blunt instruments meant for exploration—real life is messy, with artisans and warriors that held court titles, producers of goods that also acted as their own merchants, warriors that eventually took the tonsure, etc. complicating these simplistic categories.
<p></p>

<h3>Visualizations and Obstacles as Methodological Process</h3>
