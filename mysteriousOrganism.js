// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = function (num, dnaBases) {
    let obj = {
      specimenNum: num,
      dna: dnaBases,
      mutate() {
        let index = Math.floor(Math.random() * this.dna.length);
        console.log('dna: ', this.dna, ' index: ', index);
        let returnedBase;
        do {
          returnedBase = returnRandBase();
        } while(returnedBase === this.dna[index]) 
        this.dna[index] = returnedBase;
        console.log('modified newDNA: ', this.dna);
        return this.dna;
      },
  
      compareDNA(otherOrganism) {
        let len = otherOrganism.dna.length;
        //console.log('length: ', len);
        let count = 0;
        for(i=0; i < len; i++) {
          if (this.dna[i] === otherOrganism.dna[i]) {
            count++;
            //console.log('position i: ',i);
          }
        }
        //console.log('count is: ', count);
        let percentage = Math.floor(count*100/len);
        //console.log(`specimen ${this.specimenNum} ${this.dna}`);
        //console.log(`specimen ${otherOrganism.specimenNum} ${otherOrganism.dna}`);
        console.log(` specimen ${this.specimenNum} and specimen ${otherOrganism.specimenNum} have ${percentage}% DNA in common`);
        return percentage;
      },
  
      willLikelySurvive(){
        let len = this.dna.length;
        let count = 0;
        for(i=0; i < len; i++) {
          if (this.dna[i] === 'G' || this.dna[i] === 'C') {
            count++;
          }
        }
        let perc = Math.floor(count*100/len);
        console.log('percentage is: ', perc);
        if (perc >=60) return true;
        else return false;
      },
      
      complementStrand() {
        console.log('original strand:', this.dna);
        for(i=0; i < this.dna.length; i++) {
          switch(this.dna[i]) {
            case 'A': this.dna[i] = 'T'; break;
            case 'T': this.dna[i] = 'A'; break;
            case 'C': this.dna[i] = 'G'; break;
            case 'G': this.dna[i] = 'C'; break;
          }
        }
        console.log('complemented strand:', this.dna);
        return this.dna;
      },
  
  }
    return obj;
  }
  
  let dna = mockUpStrand();
  console.log('original DNA: ', dna);
  let organism = pAequorFactory(3, dna);
  let newDNA = organism.mutate();
  console.log('Earlier DNA: ', dna);
  console.log('Modified DNA: ', newDNA);
  
  let dna1 = mockUpStrand();
  let org1 = pAequorFactory(1, dna1);
  let dna2 = mockUpStrand();
  let org2 = pAequorFactory(2, dna2);
  org1.compareDNA(org2);
  console.log(org1.willLikelySurvive());
  console.log(org2.willLikelySurvive());
  
  let arrpAequor = [];
  for(let i=1; i <= 30; i++) {
    let dna = mockUpStrand();
    arrpAequor.push(pAequorFactory(i, dna));
  }
  console.log('Array of pAequor: ', arrpAequor);
  org2.complementStrand();
  
  let percTop = 0;
  let relatedInst = [];
  for(let i=0; i < 30; i++) {
    for(let j=i+1; j < 30; j++) {
      let perc = arrpAequor[i].compareDNA(arrpAequor[j]);
      if (perc > percTop) {
        percTop = perc;
        relatedInst = [arrpAequor[i].specimenNum, arrpAequor[j].specimenNum];}
    }
  }
  console.log('Related Instances are: ', relatedInst, 'top perc: ', percTop);
  
  