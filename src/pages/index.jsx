import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { Container } from "react-bootstrap";
import { Jumbotron } from "@/components/Jumbotron";
import Link from "next/link";
import { CounterContainer } from "@/components/CounterContainer";
import { useEffect } from "react";


export default function Home() {
  
  useEffect(() => {  
    document.body.style.backgroundColor = "black";
  }, []);

  
  return (
    <Container>
      <CounterContainer/>
    </Container>
  );
}
