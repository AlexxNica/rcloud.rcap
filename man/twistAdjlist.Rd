% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/topo-sort.R
\name{twistAdjlist}
\alias{twistAdjlist}
\title{Convert an in-adjacency list to an out-adjacency list, or the other way}
\usage{
twistAdjlist(adjlist)
}
\arguments{
\item{adjlist}{The adjacencly list of the graph. See
\code{topologicalSort} for the expected format.}
}
\value{
Another adjacency list, corresponding to the graph
  with all edge directions reversed.
}
\description{
In other words, it reverses the direction of each edge in a graph.
}

