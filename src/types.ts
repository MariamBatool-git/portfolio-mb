export type ExperienceItem = { 
    title : string
    companyName : string
    duration : string
    description : string[]
}

export type CertificationItem  = {
title : string
issuer : string
description : string
link : string
}

export type Experience = ExperienceItem[]
export type Certificatiions = CertificationItem[]