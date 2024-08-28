class Aluno
  def initialize(nome, curso)
    @nome = nome
    @curso = curso
    @matricula = Matricula.new(1 + rand(100))

    def nome
      return @nome
    end

    def curso
      return @curso
    end

    def curso=(valor)
      @curso = valor
    end

    def matricula
      return @matricula
    end
    
  end
end


class Matricula
  def initialize(registro)
    @registro = registro
  end

  def registro
    return @registro
  end

  def devolveRegistro
    puts("O registro do aluno é #{@registro}")
  end
end

victor = Aluno.new('Victor', 'Ruby')
puts(victor.matricula.devolveRegistro)
